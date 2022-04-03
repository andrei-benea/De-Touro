module.exports = class CustomPause {
    command(ms, cb) {
      // If we don't pass the milliseconds, the client will
      // be suspended indefinitely
      if (!ms) {
        return;
      }
  
      const returnValue = {
        value: 'something'
      };
  
      return new Promise((resolve) => {
        setTimeout(() => {
          // if we have a callback, call it right before the complete event
          if (cb) {
            cb.call(this.api);
          }
  
          resolve(returnValue);
        }, ms);
      });
    }
  }