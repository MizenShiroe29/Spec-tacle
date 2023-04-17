import React, { useState, useEffect, useCallback } from "react";
import webPageServices from "../../../services/WebPageServices";
import Friend from "./FriendCard";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { locale } from "rc-pagination/lib/locale/en_US";

function Friends() {
  const [pageData, setPageData] = useState({
    friendsData: [],
    friendComponents: [],
  });
  const [pageInfo, setPageInfo] = useState({
    currentPage: 0,
    pageIndex: 0,
    pageSize: 8,
    totalCount: 0,
  });
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  const [showFriends, setshowFriends] = useState(false);
  const [searchData, setSearch] = useState("");

  false && console.log(pageData.friendsData);
  // console.log("search===>", search, { friendsSearched: [] });
  const onDeleteRequested = useCallback((myFriend, eObj) => {
    console.log(myFriend.id.value, { myFriend, eObj });
    const idToBeDeleted = myFriend.id;

    const handler = getDeleteSuccessHandler(myFriend.id);

    webPageServices
      .deleteFriend(idToBeDeleted)
      .then(handler)
      .catch(OnDeleteError);
  }, []);

  const getDeleteSuccessHandler = (idToBeDeleted) => {
    console.log("getDeleteSuccessHandler", idToBeDeleted);
    return () => {
      console.log("onDeleteSuccess", idToBeDeleted);

      setPageData((prevState) => {
        const pd = { ...prevState };
        pd.friendsData = [...pd.friendsData];

        const idxOf = pd.friendsData.findIndex((friend) => {
          let result = false;
          if (friend.id === idToBeDeleted) {
            result = true;
          }
          return result;
        });
        if (idxOf >= 0) {
          pd.friendsData.splice(idxOf, 1);
          pd.friendComponents = pd.friendsData.map(mapFriends);
        }

        return pd;
      });
    };
  };
  // const onDeleteSuccess = (idToBeDeleted) => {
  //   console.log("onDeleteSuccess", idToBeDeleted);
  //   setpageData((prevState) => {
  //     const pd = { ...prevState };
  //     pd.friendsData = [...pd.friendsData];
  //     const idxOf = pd.friendsData.findIndex((friend) => {
  //       let result = false;
  //       if (friend.id.value === idToBeDeleted) {
  //         result = true;
  //       }
  //       return result;
  //     });
  //     if (idxOf >= 0) {
  //       pd.friendsData.splice(idxOf, 1);
  //       pd.friendComponents = pd.friendsData.map(mapFriends);
  //     }

  //     return pd;
  //   });
  // };
  const OnDeleteError = (err) => {
    console.error("Delete", err);
  };

  const mapFriends = (aFriend) => {
    console.log("mapping", aFriend);

    return (
      <Friend
        friend={aFriend}
        key={"ListA-" + aFriend.id}
        onFriendClick={onDeleteRequested}
      />
    );
  };
  useEffect(() => {
    console.log("firing useEffect for friendsData");
    webPageServices
      .getFriends(pageInfo.pageIndex, pageInfo.pageSize)
      .then(onGetFriendSuccess)
      .catch(onGetFriendError);
  }, [pageInfo]);

  const onGetFriendSuccess = (data) => {
    console.log("GetFriendSuccess", data);

    let friendsDatalog = data.item.pagedItems;

    console.log(pageInfo.pageIndex, pageInfo.pageSize);
    console.log({ "friendsDatalog -->": friendsDatalog });

    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.friendsData = friendsDatalog;
      pd.friendComponents = friendsDatalog.map(mapFriends);
      return pd;
    });
  };
  const onGetFriendError = (err) => {
    console.error("error", err);
  };

  const onClickSearch = () => {
    const searchTerm = searchData;
    webPageServices
      .searchFriends(searchTerm)
      .then(onSearchSuccess)
      .catch(onSearchError);
  };
  const onSearchSuccess = (response) => {
    console.log(response);

    const queryItems = response.item.pagedItems;
    console.log(queryItems);

    //update your friendState
    setPageData((prevState) => {
      let searchResults = { ...prevState };
      searchResults.friendsData = queryItems;
      searchResults.friendComponents = queryItems.map(mapFriends);
      return searchResults;
    });
    //set your friends array equal to your response
  };
  const onSearchError = (err) => {
    console.error("searchError", err);
  };
  const onFormFieldChange = (event) => {
    console.log("onChange", { syntheticEvent: event });
    const target = event.target;
    const newUserValue = target.value;
    setSearch(() => {
      return newUserValue;
    });
  };
  // const onHeaderClicked = () => {
  //   setCount((prevState) => {
  //     return prevState + 1;
  //   });
  // };
  const onToggleFriends = () => {
    setshowFriends(() => {
      return !showFriends;
    });
  };
  const onChange = (page, pageSize) => {
    setPageInfo({
      currentPage: page,
      pageIndex: page - 1,
      pageSize,
      totalCount: pageInfo.totalCount,
    });
  };
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <button
              type="button"
              className="btn btn-info  mb-2"
              onClick={
                // `{onHeaderClicked}`,
                onToggleFriends
              }
            >
              {!showFriends ? "Show Friends" : "Hide Friends"}
              {/* `{count}`` */}
            </button>
            <Link
              to="/Friends/AddFriend"
              type="button"
              className="btn btn-outline-dark ms-3 mb-2"
            >
              Add Friend
            </Link>
          </div>

          <div className="col-6">
            <div className="input-group mb-3">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                onClick={onClickSearch}
              >
                Search
              </button>
              <input
                type="text"
                className="form-control"
                name="search"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                onChange={onFormFieldChange}
              />
            </div>
          </div>
        </div>
        <Pagination
          onChange={onChange}
          current={pageInfo.pageIndex + 1}
          pageSize={pageInfo.pageSize}
          locale={locale}
          total={pageInfo.totalCount}
        />
        <div className="row">{showFriends && pageData.friendComponents}</div>
      </div>
    </React.Fragment>
  );
}

export default Friends;
