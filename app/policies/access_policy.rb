class AccessPolicy
  include AccessGranted::Policy

  def configure
    # Example policy for AccessGranted.
    # For more details check the README at
    #
    # https://github.com/chaps-io/access-granted/blob/master/README.md
    #
    # Roles inherit from less important roles, so:
    # - :admin has permissions defined in :member, :guest and himself
    # - :member has permissions from :guest and himself
    # - :guest has only its own permissions since it's the first role.
    #
    # The most important role should be at the top.
    # In this case an administrator.
    #
    # role :admin, proc { |user| user.admin? } do
    #   can :destroy, User
    # end

    # More privileged role, applies to registered users.
    #
    # role :member, proc { |user| user.registered? } do
    #   can :create, Post
    #   can :create, Comment
    #   can [:update, :destroy], Post do |post, user|
    #     post.author == user
    #   end
    # end

    # The base role with no additional conditions.
    # Applies to every user.
    #
    # role :guest do
    #  can :read, Post
    #  can :read, Comment
    # end
    role :admin, proc { |user| user.admin? } do
      can :manage, Contract
      can :manage, List
      can :manage, Position
      can :manage, Project
      can :manage, Skill
      can :manage, Task
      can :manage, Team
      can :manage, User
    end

    role :moderator, proc { |user| user.moderator? } do
      can :manage, Position
      can :manage, Skill
      can :manage, Task
      can :manage, List
      can [:create, :read, :update], Team
      can [:create, :read, :update], Project
      can [:create, :read], Contract
      can :read, User
      can [:create, :update, :destroy], User do |u, user|
        u.id == user.id
      end 
    end

    role :leader, proc { |user| user.leader? } do
      can :manage, Task do |project, user|
        task.list.project.user.is_visible_for?(user)
      end
      can :manage, List do |project, user|
        list.project.is_visible_for?(user)
      end
      can [:read, :update], Team do |team, user|
        team.users.include?(user)
      end
      can [:read, :update], Project do |project, user|
        project.is_visible_for?(user)
      end
      can :read, User
      can [:create, :update, :destroy], User do |u, user|
        u.id == user.id
      end
    end

    role :user, proc { |user| user.user? } do
      can :manage, Task do |project, user|
        task.list.project.user.is_visible_for?(user)
      end
      can [:create, :read, :update], List do |project, user|
        list.project.is_visible_for?(user)
      end
      can :read, Team do |team, user|
        team.users.include?(user)
      end
      can [:read], Project do |project, user|
        project.is_visible_for?(user)
      end
      can :read, User
      can [:create, :update, :destroy], User do |u, user|
        u.id == user.id
      end
    end

    role :client, proc { |user| user.client? } do
      can :manage, Task do |project, user|
        task.list.project.user.is_visible_for?(user)
      end
      can [:read], Project do |project, user|
        project.is_visible_for?(user)
      end
      can :read, User
      can [:create, :update, :destroy], User do |u, user|
        u.id == user.id
      end
    end
  end
end
