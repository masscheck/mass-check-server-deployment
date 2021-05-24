import express from 'express';
import cors from 'cors';
// import path from 'path';
// import enforce from 'express-sslify';

// Route
import downloadPrivateKeyRoute from './src/Route/DownloadPrivateKey';
import createAcc from './src/Route/CreateAcc';
import getUserInfo from './src/Route/GetUserInfo';

const app = express();

// if (process.env.NODE_ENV === 'production') {
//   app.use(enforce.HTTPS({ trustProtoHeader: true }));
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', downloadPrivateKeyRoute);
app.use('/api', createAcc);
app.use('/api', getUserInfo);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Local server port number:', port);
});
