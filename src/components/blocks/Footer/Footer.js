import { useSelector } from "react-redux";

function Footer() {
  const count = useSelector((state) => state.counter.count);

  return (
    <footer>
      Footer:
      {count}
    </footer>
  );
}

export default Footer;
