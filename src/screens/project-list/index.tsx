import { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import * as qs from "qs";
import { cleanObject } from "../../utils/index";

const apiUrl = process.env.REACT_APP_API_URL;

export const PorjextListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const useDebounceParam = useDebounce(param, 200);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(useDebounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [useDebounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const useDebounce = (value: Object, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 在Value变化时，新设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个use Effect运行后执行。清理上一个定时器
    return () => clearTimeout(timeout);
  }, [value, delay]);

  // 返回最新的值
  return debouncedValue;
};
