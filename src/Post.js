function Post({ imageSrc, name, flagColors }) {
    return (
      <div className="container">
        <div className="post">
          <div className="post-profile">
            <div className="left" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="hashcoded.jpg" style={{ width: '2rem', height: '2rem', objectFit: 'cover' }} alt="" />
              <span className="name" style={{ paddingLeft: '1rem' }}>
                {name}
              </span>
            </div>
            <div className="right">
              <i className="fas fa-ellipsis"></i>
            </div>
          </div>
          <div className="post-media">
            <img src={imageSrc} className="post-image" alt="" />
          </div>
          <div className="post-btns">
            <button className="btn">
              <FontAwesomeIcon icon={faFlag} style={{ color: flagColors[0] }} />
            </button>
            <button className="btn">
              <FontAwesomeIcon icon={faFlag} style={{ color: flagColors[1] }} />
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Post;