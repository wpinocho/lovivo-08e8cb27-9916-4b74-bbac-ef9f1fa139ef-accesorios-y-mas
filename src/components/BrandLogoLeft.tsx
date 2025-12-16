import logo from '@/assets/logo.png'

export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center gap-2">
      <img 
        src={logo}
        alt="MenMarket Logo"
        className="h-12 object-contain" 
      />
    </a>
  )
}