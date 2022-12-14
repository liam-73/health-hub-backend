const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

// routers
const adminRouter = require('./routes/admin.routes');
const userRouter = require('./routes/user.routes');
const appointmentRouter = require('./routes/appointment.routes');
const transactionRouter = require('./routes/transaction.routes');

// error handler
const { allErrorHandler } = require('./handlers/error.handler');

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(Sentry.Handlers.requestHandler());

app.use('/admins', adminRouter);
app.use('/users', userRouter);
app.use('/appointments', appointmentRouter);
app.use('/transactions', transactionRouter);

// sentry
Sentry.init({
  dsn: process.env.SENTRY,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.tracingHandler());
app.use(Sentry.Handlers.errorHandler());

app.use(allErrorHandler);

app.listen(port, () => {
  console.log('Server is up on port ', port);
});
