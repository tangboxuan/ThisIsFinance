from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger

def test():
    print("Scheduler working")

scheduler = BlockingScheduler()
scheduler.add_job(
    func=test,
    trigger=CronTrigger(minute="1")
)
print("Clock started")
scheduler.start()
