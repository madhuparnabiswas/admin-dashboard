import { Header, StatsCard } from "../../../components";


const Dashboard = () => {
  const user = { name: 'Mainak'}
  const dashboardStats = {
    totalCommits: 72,
    commitsMade: { currentWeek: 13, lastWeek: 15 },
    totalProjects: 34,
    somethingData: {currentMonth: 15, lastMonth: 11},
    activeProjects: {total: 6, currentMonth: 2, lastMonth: 3},

  }

  const { totalCommits, commitsMade, totalProjects, somethingData, activeProjects} = dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'Guest'}`}
        description="Track activity, trends and productivity in real time"
      />

      <section className="flex flex-col gap-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 w-full " >

          <StatsCard
            headerTitle = "Total Commits"
            total={totalCommits}
            currentMonthCount={commitsMade.currentWeek}
            lastMonthCount={commitsMade.lastWeek}
          />

          <StatsCard
            headerTitle = "Total Projects"
            total={totalProjects}
            currentMonthCount={somethingData.currentMonth}
            lastMonthCount={somethingData.lastMonth}
          />

          <StatsCard
            headerTitle = "Active Projects"
            total={activeProjects.total}
            currentMonthCount={activeProjects.currentMonth}
            lastMonthCount={activeProjects.lastMonth}
          />

          <StatsCard
            headerTitle = "Active Projects"
            total={activeProjects.total}
            currentMonthCount={activeProjects.currentMonth}
            lastMonthCount={activeProjects.lastMonth}
          />

        </div>
      </section>

    </main>

  )
}
export default Dashboard;
