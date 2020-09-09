import React, {useState} from 'react'
import Slider from '@material-ui/core/Slider';
export default function Cate(props) {
    const {stores} = props
    const [search, setSearch] = useState("")
    const marks = [
        {
          value: 4,
          label: '4 km',
        },
        {
          value: 5,
          label: '5 km',
        },
        {
          value: 15,
          label: '15 km',
        },
        {
          value: 20,
          label: '20 km',
        },
      ];
    function valuetext(value) {
        return value;
    }
    function onHandleKm(event, newValue){
        props.onHandleKm(newValue)
    }
    function onHandleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }
    function onHandleSubmit(e){
        e.preventDefault();
        console.log(search)
    }
    const tempItem = stores.map((store, index) => {
        return(
            <div className="cate__storeNear-content--item" key={index}>
            <div className="name">{store.name}</div>
            <div className="cate__storeNear-content--item__main">
                <div className="cate__storeNear-content--item__main-img">
                    <img src="https://poipic1.coccoc.com/450x230/poi/previews/20160615/11733-66ff55dc16bfa1d3ab0dd9c6556923a6.jpg" alt="imgg"></img>
                </div>
                <div className="cate__storeNear-content--item__main-sub">
                    <div className="cate__storeNear-content--item__main-sub-address"><i className="fas fa-map-marker-alt"></i> 63, Lê Văn Việt</div>
                    <div className="cate__storeNear-content--item__main-sub-ratting">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="cate__storeNear-content--item__main-sub-more"><i className="far fa-eye"></i><span>{(store.dist.calculated/1000).toFixed(2)}km</span></div>
                </div>
            </div>

            <div className="cate__storeNear-content--item-order">
                <a href="/ss" className="btn btn-sm animated-button victoria-one">Đặt</a> 
            </div>
        </div>
        )
    })
    return (
        <div className= "cate">
            <div className="cate__search">
                <form onSubmit={onHandleSubmit}>
                    <input type="text" placeholder="Nhập tên cửa hàng ..." onChange={onHandleSearch}/>
                    <button type="submit"><img src="http://bizweb.dktcdn.net/100/369/010/themes/752396/assets/pic-search.png" alt="imgg"/></button>
                </form>

                <div className="cate__search-sub">
                    <div className="cate__storeNear-content">
                        <div className="cate__storeNear-content--item">
                            <div className="name">Photo Hoàng Duy</div>
                            <div className="cate__storeNear-content--item__main">
                                <div className="cate__storeNear-content--item__main-img">
                                    <img src="https://poipic1.coccoc.com/450x230/poi/previews/20160615/11733-66ff55dc16bfa1d3ab0dd9c6556923a6.jpg" alt="imgg"></img>
                                </div>
                                <div className="cate__storeNear-content--item__main-sub">
                                    <div className="cate__storeNear-content--item__main-sub-address"><i className="fas fa-map-marker-alt"></i> 63, Lê Văn Việt</div>
                                    <div className="cate__storeNear-content--item__main-sub-ratting">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="cate__storeNear-content--item__main-sub-more"><i className="far fa-eye"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="cate__storeNear-content--item">
                            <div className="name">Photo Hoàng Duy</div>
                            <div className="cate__storeNear-content--item__main">
                                <div className="cate__storeNear-content--item__main-img">
                                    <img src="https://poipic1.coccoc.com/450x230/poi/previews/20160615/11733-66ff55dc16bfa1d3ab0dd9c6556923a6.jpg" alt="imgg"></img>
                                </div>
                                <div className="cate__storeNear-content--item__main-sub">
                                    <div className="cate__storeNear-content--item__main-sub-address"><i className="fas fa-map-marker-alt"></i> 63, Lê Văn Việt</div>
                                    <div className="cate__storeNear-content--item__main-sub-ratting">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="cate__storeNear-content--item__main-sub-more"><i className="far fa-eye"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="cate__storeNear-content--item">
                            <div className="name">Photo Hoàng Duy</div>
                            <div className="cate__storeNear-content--item__main">
                                <div className="cate__storeNear-content--item__main-img">
                                    <img src="https://poipic1.coccoc.com/450x230/poi/previews/20160615/11733-66ff55dc16bfa1d3ab0dd9c6556923a6.jpg" alt="imgg"></img>
                                </div>
                                <div className="cate__storeNear-content--item__main-sub">
                                    <div className="cate__storeNear-content--item__main-sub-address"><i className="fas fa-map-marker-alt"></i> 63, Lê Văn Việt</div>
                                    <div className="cate__storeNear-content--item__main-sub-ratting">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="cate__storeNear-content--item__main-sub-more"><i className="far fa-eye"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="cate__storeNear-content--item">
                        <div className="name">Photo Hoàng Duy</div>
                        <div className="cate__storeNear-content--item__main">
                            <div className="cate__storeNear-content--item__main-img">
                                <img src="https://poipic1.coccoc.com/450x230/poi/previews/20160615/11733-66ff55dc16bfa1d3ab0dd9c6556923a6.jpg" alt="imgg"></img>
                            </div>
                            <div className="cate__storeNear-content--item__main-sub">
                                <div className="cate__storeNear-content--item__main-sub-address"><i className="fas fa-map-marker-alt"></i> 63, Lê Văn Việt</div>
                                <div className="cate__storeNear-content--item__main-sub-ratting">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="cate__storeNear-content--item__main-sub-more"><i className="far fa-eye"></i></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            
            </div>
            <div className="cate__filter">
                <h2>Lọc theo khoảng cách</h2>
                <Slider
                    defaultValue={4}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    step={1}
                    marks={ marks}
                    min={0}
                    max={20}
                    valueLabelDisplay="auto"
                    onChange={onHandleKm}
                />
            </div>
            <div className="cate__storeNear">
                <h2>Những cửa hàng gần đây</h2>
                <div className="cate__storeNear-content">
                   
                {tempItem}       
                </div>
            </div>
        </div>
    )
}
