import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="border-2 border-green-700 rounded-2xl flex items-center p-4 gap-5">
      <Logo />
      <p className="text-lg font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    </footer>
  )
}

export default Footer