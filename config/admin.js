module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e960bbe808a5ce49bfe3924933c12960'),
  },
});
