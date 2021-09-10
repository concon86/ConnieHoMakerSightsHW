
export const Detail = ({ item }) => {
  return (
    <div className="animal-detail">
      <div className="poster-img">{item.img ? <img src={item.img} alt={`${item.name}`} /> : 'No Img Available'}</div>
      <div className="profile detail-content">
        <div className="left">
          <div className="name">{item?.name}</div>
          <div className="sex-breed">{item?.sex ? item.sex + ' ' : ''}{item?.breed}</div>
          <div className="bio">{item?.bio}</div>
        </div>
        <div className="right">
          <div className="days-old">{item?.daysOld} Days Old</div>
        </div>
      </div>
      {item?.scores ?
        <div className="chart detail-content">
          <div className="kindness">Kindness {item?.scores?.kindness}</div>
          <div className="activity">Activity {item?.scores?.activity}</div>
          <div className="health">Health {item?.scores?.healthy}</div>
        </div>
        : null}
    </div>)
}