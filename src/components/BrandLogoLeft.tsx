import logo from '@/assets/marketplace-logo.jpg'

export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center gap-2">
      <img 
        src={logo}
        alt="Marketplace Logo"
        className="h-10 w-10 object-contain rounded-lg" 
      />
      <span className="text-xl font-bold gradient-text hidden sm:inline">
        AccessMarket
      </span>
    </a>
  )
}