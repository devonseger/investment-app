export default function Inputs() {
    return (<form className="grid grid-cols-2 gap-4 max-w-96">
        <p className="">Initial Investment<br/><input type="integer" placeholder="Enter a number" /></p>
        <p className="">Annual Investment<br/><input type="integer" placeholder="Enter another number" /></p>
        <p className="">Expected Return<br/><input type="integer" placeholder="Enter another number" /></p>
        <p className="">Duration<br/><input type="integer" placeholder="Enter another number" /></p>
    </form>)
}