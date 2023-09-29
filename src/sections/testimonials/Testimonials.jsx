import './Testimonials.scss'
import test1 from '../../assets/pexels-daniel-xavier-1239291.jpg'
import test2 from '../../assets/pexels-stefan-stefancik-91227.jpg'

const Testimonilas = () => {
  return (
    <section className='testimonials'>
        <div className="grid__testimonials">
            <h1 className='testi__h1'>Client Testimonials</h1>

            <div className="testimonials__container">
                <div className="test__card">
                    <img src={test1} alt="" />
                    <h2>Jessica</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quibusdam doloremque enim at soluta nesciunt ipsa corporis cumque, expedita porro omnis esse cum minus quia atque! Molestias doloremque ipsa sit!</p>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eaque molestias alias, iusto sequi eum error in dolorum id praesentium cupiditate rem deserunt placeat? Aspernatur esse sapiente natus commodi perspiciatis?</h3>
                </div>

                <div className="test__card">
                    <img src={test2} alt="" />
                    <h2>Paul</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus molestias temporibus sunt dolore dicta, reprehenderit minus at? Veniam ipsa, enim a at incidunt aperiam cum voluptates sint necessitatibus nisi adipisci ad est doloribus vitae. Quae alias esse impedit dolores repellendus tenetur quos, optio consequuntur. Omnis at enim ipsum voluptas tempore!</p>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima adipisci ad sint magnam molestiae quam iusto rerum autem? Laudantium, assumenda tempore. Ex repellendus commodi nesciunt eligendi atque porro fuga.</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonilas