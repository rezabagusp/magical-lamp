import React, {
  ChangeEvent,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { format } from 'date-fns';
import { Column } from 'react-table';

import Button from '../components/button';
import { Label, SelectOption, TextInput } from '../components/input';
import Table from '../components/table';
import type { Option } from '../types/misc';
import type { UserFeed, User } from '../types/user';

const RESULT_LIMIT = 20;

type Filter = {
  keyword: string,
  results: string,
  gender: string,
  page: string,
};

const GENDER_LIST: Option[] = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

const getInitialFilter = () => ({
  keyword: '',
  results: String(RESULT_LIMIT),
  gender: '',
  page: '1',
});

const HomeScreen = () => {
  const [data, setData] = useState<User[]>([]);
  const [keyword, setKeyword] = useState('');
  const [selectedGender, setSelectedGender] = useState<Option>(GENDER_LIST[0]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState<Partial<Filter>>(getInitialFilter());

  const isInitialMount = useRef(true);

  const handleFetchhData = useCallback((params: Filter) => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${new URLSearchParams(params as any)}`)
    .then((response) => response.json())
    .then((data: UserFeed) => {
      setData(data.results);
      setPage(data.info.page);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      handleFetchhData(filter as Filter);
    }
  }, [handleFetchhData, filter]);

  useEffect(() => {
    handleFetchhData(filter as Filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const debounceKeyword = useDebouncedCallback((newKeyword: string) => {
    setFilter((prev) => ({
      ...prev,
      keyword: newKeyword,
    }));
  }, 700);

  const handleChangeKeyword = (newKeword: string) => {
    setKeyword(newKeword);
    debounceKeyword(newKeword);
  };

  const handleChangeGender = (newSelectedGender: Option) => {
    setSelectedGender(newSelectedGender);
    setFilter((prev) => ({
      ...prev,
      gender: newSelectedGender.value as User['gender'],
    }));
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
    setFilter((prev) => ({
      ...prev,
      page: String(newPage),
    }));
  };

  const handleResetFilter = () => {
    setKeyword('');
    setSelectedGender(GENDER_LIST[0]);
    setPage(1);
    setFilter(getInitialFilter());
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Username',
        accessor: 'login.username',
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value }: { value: User['name']}) => `${value.first} ${value.last}`,
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Registered Date',
        accessor: 'registered.date',
        Cell: ({ value }: { value: string}) => {
          const formattedDate = format(new Date(value), 'dd-MM-yyyy HH:mm');
          return formattedDate;
        },
      },
    ],
    [],
  );

  return (
    <div className="px-4">
      <div className="md:flex md:max-w-md">
        <div className="md:w-1/2">
          <Label>Search</Label>
          <TextInput
            value={keyword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeKeyword(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="mt-2 md:w-1/2 md:ml-2 md:mt-0">
          <Label>Gender</Label>
          <SelectOption
            value={selectedGender}
            onChange={(newSelectedGender) => handleChangeGender(newSelectedGender as Option)}
            options={GENDER_LIST}
          />
        </div>
      </div>
      <Button className="max-w-[120px] mt-4" onClick={handleResetFilter}>
        Reset Filter
      </Button>

      <div className="mt-5">
        <Table
          data={data}
          columns={columns as Column<User>[]}
          loading={loading}
          page={page}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
