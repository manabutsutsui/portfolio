import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* ナビゲーションヘッダー */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              MANABU'S PORTFOLIO
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
        <Image
                src="/images/profile/portfolio.png"
                alt="MANABU TSUTSUIのプロフィール画像"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-white shadow-lg"
          priority
        />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              MANABU TSUTSUI
              <span className="text-blue-600 dark:text-blue-400 block mt-2">
                個人開発者
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#projects"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                プロジェクト
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* アバウトセクション */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              私は情熱的なモバイルアプリ開発者として、最新の技術を学び続けながら、
              ユーザーにとって価値のあるスマートフォンアプリケーションを開発しています。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                経歴と経験
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                モバイルアプリ開発の世界に魅了され、Flutterを中心に学習を進めています。
                特にDartとFlutterのエコシステムに深い興味を持ち、
                クロスプラットフォーム開発とモダンな設計パターンを実践しています。
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  モバイルアプリ開発（Flutter, Dart）
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  レスポンシブUIデザイン（Material Design, Cupertino）
          </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  バックエンド連携（REST API, Firebase）
          </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">開発への想い</h3>
              <p className="mb-4">
                技術は人々の生活をより豊かにするためのツールだと考えています。
                使いやすく、美しく、そして意味のあるスマートフォンアプリを通じて、
                ユーザーに価値を提供することを目指しています。
              </p>
              <p>
                継続的な学習と改善を心がけ、
                常に最新の技術トレンドをキャッチアップしながら成長し続けています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              これまでに開発したプロジェクトの一部をご紹介します。
              それぞれのプロジェクトで新しい技術に挑戦し、スキルを向上させています。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* プロジェクトカード1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
            <Image
                  src="/images/projects/project01.png"
                  alt="プロジェクト1のスクリーンショット"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  タスク管理アプリ
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Flutterで開発したクロスプラットフォーム対応のタスク管理アプリ。直感的なUIとスムーズなアニメーションを実装しています。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    Flutter
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    Dart
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                    Firebase
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    App Store
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">
                    GitHub
          </a>
        </div>
              </div>
            </div>

            {/* プロジェクトカード2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
          <Image
                  src="/images/projects/project02.png"
                  alt="プロジェクト2のスクリーンショット"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  天気予報アプリ
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  リアルタイム天気情報を表示するモバイルアプリ。位置情報とAPI連携により、現在地の詳細な天気予報を提供します。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    Flutter
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                    REST API
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded-full">
                    Provider
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    App Store
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* プロジェクトカード3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-r from-purple-400 to-purple-600">
                <Image
                  src="/images/projects/project03.png"
                  alt="プロジェクト3のスクリーンショット"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  家計簿アプリ
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  収支を視覚的に管理できる家計簿アプリ。チャートとグラフで支出傾向を分析し、予算管理をサポートします。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    Flutter
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    SQLite
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                    Charts
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    App Store
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              これまでに習得した技術スキルと、現在学習中の技術をご紹介します。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">F</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Flutter</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                クロスプラットフォーム対応のモバイルアプリ開発
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">D</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dart</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Flutterアプリ開発のためのプログラミング言語
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">FB</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Firebase</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                認証、データベース、ホスティングの統合プラットフォーム
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">UI</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">UI/UX</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                ユーザー体験を重視したモバイルアプリデザイン
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトセクション */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談や、一緒に働く機会がございましたら、
            ぜひお声がけください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              メール
        </a>
        <a
              href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. MANABU TSUTSUI
          </p>
        </div>
      </footer>
    </div>
  );
}
