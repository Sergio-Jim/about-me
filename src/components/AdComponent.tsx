import React, { useEffect, useState } from 'react';

interface ApiResponse {
  link: string;
  alt: string;
  href: string;
  message: string;
}

const AdComponent: React.FC = () => {
  const [response, setResponse] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchAdData = () => {
      const formdata = new FormData();
      formdata.append("type", "Horizontal Strip");
      formdata.append("tags", "juice,beverage,drinks,health");

      const ajax = new XMLHttpRequest();
      ajax.addEventListener("load", (event: Event) => {
        const target = event.target as XMLHttpRequest;
        if (target && target.status === 200) {
          const responseData: ApiResponse = JSON.parse(target.responseText);
          setResponse(responseData);
        }
      }, false);

      ajax.open("POST", "https://ad.simaneka.com/api/get");
      ajax.setRequestHeader("authorisation", "RCrd89eu4DteEb4q9wYobvgo2E8P0EGT");

      ajax.send(formdata);
    };

    fetchAdData();
  }, []);

  return (
    <div>
      {response ? (
        <>
          <img className="advertIMG" src={response.link} alt={response.alt} />
          <a className="anchorElement" href={response.href}>Visit Link</a>
          {/* <h1 className="headerText">{response.message}</h1> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdComponent;
