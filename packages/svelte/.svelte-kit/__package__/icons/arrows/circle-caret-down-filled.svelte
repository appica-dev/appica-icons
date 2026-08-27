<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.875 3.556A9.75 9.75 0 1 1 2.25 12l.005-.316a9.75 9.75 0 0 1 14.62-8.128m-1.95 6.494h-5.85a.976.976 0 0 0-.69 1.664l2.925 2.925a.976.976 0 0 0 1.38 0l2.924-2.925a.975.975 0 0 0 0-1.379l-.091-.08a.98.98 0 0 0-.598-.205\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
