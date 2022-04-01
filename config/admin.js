module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '38b7ec6ed53f46729708490a7298613a'),
  },
});
