const BannerBackground = ({ children, image }: { children: React.ReactNode; image: string }) => {
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </div>
  );
};

export default BannerBackground;
