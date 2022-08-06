import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription, interval } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'bellsekolah'
  image="../assets/bellsekolah.png"
  produk="../assets/foto.png"
  portfolio=[
    "../assets/Slide1.PNG",
    "../assets/Slide2.PNG",
    "../assets/Slide3.PNG",
    "../assets/Slide4.PNG",
    "../assets/Slide5.PNG",
    "../assets/Slide6.PNG",
    "../assets/Slide7.PNG",
    "../assets/Slide8.PNG",
  ]

  private subscription?: Subscription
  
  public dateNow = new Date()
  public dDay = new Date('Jan 01 2023 00:00:00')
  milliSecondsInASecond = 1000
  hoursInADay = 24
  minutesInAnHour = 60
  SecondsInAMinute  = 60

  public timeDifference: any
  public secondsToDday: any
  public minutesToDday: any
  public hoursToDday: any
  public daysToDday: any


  private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime()
      this.allocateTimeUnits(this.timeDifference)
  }

private allocateTimeUnits (timeDifference: any) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute)
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute)
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay)
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay))
}

  ngOnInit() {
     this.subscription = interval(1000)
         .subscribe(x => { this.getTimeDifference() })
  }

 ngOnDestroy() {
    this.subscription?.unsubscribe()
 }
}
