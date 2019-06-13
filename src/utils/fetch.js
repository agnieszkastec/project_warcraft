export default function fetch(url, params) {
  const {
    hostname,
    port,
    protocol
  } = window.location;

  return window
    .fetch(
      `${ protocol }//${ hostname }:${ Number(port) + 1 }/${ url }`,
      {
        body: JSON.stringify({
          ...params,
          token: window.localStorage.getItem('token')
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    .then((response) => {
      if(response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
}