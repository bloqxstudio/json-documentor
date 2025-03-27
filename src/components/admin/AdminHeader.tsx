
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { PlusCircle, RefreshCw, Users } from 'lucide-react';

interface AdminHeaderProps {
  onRefresh: () => void;
}

const AdminHeader = ({ onRefresh }: AdminHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Painel de Administração</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie componentes, categorias e usuários.
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button asChild className="hover-lift" size="sm">
          <Link to="/components/new">
            <PlusCircle className="h-4 w-4 mr-1" />
            Novo Componente
          </Link>
        </Button>
        <Button variant="outline" size="sm" onClick={onRefresh} className="gap-1">
          <RefreshCw className="h-4 w-4" />
          Atualizar
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link to="/admin/users">
            <Users className="h-4 w-4 mr-1" />
            Gerenciar Usuários
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
