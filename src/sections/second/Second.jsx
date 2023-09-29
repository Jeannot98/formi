import './Second.scss'
import Work from '../../assets/image.jpg'

const Second = () => {
    return (
        <section className='second'>
            <div className="grid-products">
                <h1 className='second__h1'>Best Place for Design</h1>
            </div>

            <div className="second-container">
                <div className="card long">
                    <img src={Work} alt="" />
                    <p>Coding full eCommerce's</p>
                </div>

                <div className="card">
                    <img src={Work} alt="" />
                    <p>Coding full Advanced UI</p>
                </div>

                <div className="card">
                    <img src={Work} alt="" />
                    <p>Professional Team</p>
                </div>

                <div className="card">
                    <img src={Work} alt="" />
                    <p>Innovative designs</p>
                </div>

                <div className="card">
                    <img src={Work} alt="" />
                    <p>advanced SEO Optimization</p>
                </div>
            </div>
        </section>
    )
}

export default Second