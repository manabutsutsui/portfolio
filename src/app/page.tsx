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
              MANABU&apos;S PORTFOLIO
            </Link>
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-16">
              MANABU TSUTSUI
              <span className="text-blue-600 dark:text-blue-400 block mt-2">
                個人開発者
              </span>
            </h1>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Projects
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* プロジェクトカード1 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-[480px] flex flex-col">
                <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
                  <Image
                    src="/images/projects/project01.png"
                    alt="プロジェクト1のスクリーンショット"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    ブクカレ
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    ブクカレは、読書好きのためのシンプルで直感的な読書記録アプリです。カレンダー形式で読書履歴を一目で確認でき、継続的な読書習慣の形成をサポートします。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      Flutter
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                      Firebase
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://apps.apple.com/jp/app/%E3%83%96%E3%82%AF%E3%82%AB%E3%83%AC-%E6%97%A5%E3%80%85%E3%81%AE%E8%AA%AD%E6%9B%B8%E3%82%92%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC%E3%81%A7%E8%A8%98%E9%8C%B2/id6746183055" className="inline-block">
                      <Image
                        src="/images/button/appstore.svg"
                        alt="App Storeからダウンロード"
                        width={120}
                        height={40}
                        className="hover:opacity-80 transition-opacity"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* プロジェクトカード2 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-[480px] flex flex-col">
                <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
                  <Image
                    src="/images/projects/project02.png"
                    alt="プロジェクト2のスクリーンショット"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Seichi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    日本全国のアニメ聖地を閲覧できるアプリです。他のユーザーと聖地の思い出を共有したり、聖地の詳細情報を確認することができます。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      Flutter
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                      Firebase
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://apps.apple.com/jp/app/seichi-%E3%82%A2%E3%83%8B%E3%83%A1%E3%81%AE%E8%81%96%E5%9C%B0%E5%B7%A1%E7%A4%BC%E3%83%9E%E3%83%83%E3%83%97/id6723886292" className="inline-block">
                      <Image
                        src="/images/button/appstore.svg"
                        alt="App Storeからダウンロード"
                        width={120}
                        height={40}
                        className="hover:opacity-80 transition-opacity"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* プロジェクトカード3 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-[480px] flex flex-col">
                <div className="relative h-48 bg-gradient-to-r from-purple-400 to-purple-600">
                  <Image
                    src="/images/projects/project03.png"
                    alt="プロジェクト3のスクリーンショット"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    ワクワクAI絵本
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    AIを用いて、あなただけの絵本を作成しましょう。テキストを入力するだけで、オリジナルの絵本を自動生成できるアプリです。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      Flutter
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                      Firebase
                    </span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                      OpenAI API
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://apps.apple.com/jp/app/%E3%83%AF%E3%82%AF%E3%83%AF%E3%82%AFai%E7%B5%B5%E6%9C%AC-%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%81%AE%E3%81%BF%E3%81%A7%E7%B0%A1%E5%8D%98%E7%B5%B5%E6%9C%AC%E4%BD%9C%E6%88%90/id6741503793" className="inline-block">
                      <Image
                        src="/images/button/appstore.svg"
                        alt="App Storeからダウンロード"
                        width={120}
                        height={40}
                        className="hover:opacity-80 transition-opacity"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
