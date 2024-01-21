import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getGroupsFetch } from "../store/actions/pagesActions";



export function useGrouops() {
 const { error, groups } = useAppSelector(state => state.pagesSlice)
 const dispatch = useAppDispatch()

 useEffect(() => {
  if (!groups) {
   dispatch(getGroupsFetch())
  }
 }, [])

 return {groups, error}
}