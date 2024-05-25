import React from 'react'


function Header() {
  return (
    <div>
      <header>
        <div class="conatiner">
            <div class="home_header_info">
                <h1 class="typewrite" data-period="2000" data-type='[ "Incredible!ndia", "Dekho Apna Desh!", " Explore the Indian Culture and Heritage." ]'></h1>
                <p>India is a country dotted with stunning wildlife diversity, and rich traditions. While the Western coast greets you with mouth-watering delicacies, the East part invites you to experience its greenery.</p>
                <a href="https://indianculture.gov.in/">Read More</a>
            </div>
        </div>
        <div class="video">
            <video id="video" autoplay loop muted>
                <source type="video/mp4" src="images/v1.mp4" />
            </video>
        </div>
    </header>
    </div>
  )
}

export default Header
