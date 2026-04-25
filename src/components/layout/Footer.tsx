import { Mail } from "lucide-react";
import { Link } from "react-router";
import { Container } from "./Container";
import { company } from "@/content/company";
import { footerNav } from "@/content/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-2 text-xs font-medium tracking-wide text-slate-500">
              {company.nameKo}
            </p>
            <img
              src="/brand/logos/logo-horizontal.svg"
              alt="BLAH"
              className="mb-3 h-7 w-auto"
            />
            <p className="text-sm leading-relaxed text-slate-500">
              {company.tagline}.
              <br />
              {company.domain}
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-900">바로가기</p>
            <ul className="flex flex-col gap-2">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-slate-900">문의</p>
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <Mail size={14} />
                <span>{company.email}</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-1 text-xs text-slate-500 sm:grid-cols-2">
            {company.founder && (
              <div className="flex gap-2">
                <dt className="shrink-0 font-medium text-slate-700">사업자명</dt>
                <dd>{company.founder}</dd>
              </div>
            )}
            {company.registration && (
              <div className="flex gap-2">
                <dt className="shrink-0 font-medium text-slate-700">
                  사업자 등록번호
                </dt>
                <dd>{company.registration}</dd>
              </div>
            )}
            {company.address && (
              <div className="flex gap-2 sm:col-span-2">
                <dt className="shrink-0 font-medium text-slate-700">주소</dt>
                <dd>{company.address}</dd>
              </div>
            )}
            {company.privacyEmail && (
              <div className="flex gap-2 sm:col-span-2">
                <dt className="shrink-0 font-medium text-slate-700">
                  개인정보 관리 문의
                </dt>
                <dd>
                  <a
                    href={`mailto:${company.privacyEmail}`}
                    className="transition-colors hover:text-slate-900"
                  >
                    {company.privacyEmail}
                  </a>
                </dd>
              </div>
            )}
          </dl>
          <p className="mt-1 text-xs text-slate-400">
            © {year} {company.nameKo}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
