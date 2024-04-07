// // TEST : youtube search

// if (session?.data?.accessToken) {
//     const getChannel = async () => {
//       const data = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q={syukaworld}}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${session.data.accessToken}`,
//           },
//         }
//       );

//       return data.json();
//     };
//     getChannel().then((res) => {
//       console.log(res);
//     });
//   }