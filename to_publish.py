#!/bin/env python3
content: list[str] = []
with open('dist/index.html', 'r') as f:
    content = f.readlines();
    for line in content:
        if line.find('href="/') != -1\
            or line.find('src="/') != -1:
            i = content.index(line)
            line = line.replace('="/', '="')
            content[i] = line
with open('dist/index.html', 'w') as f:
    f.writelines(content)
    print('Success')
