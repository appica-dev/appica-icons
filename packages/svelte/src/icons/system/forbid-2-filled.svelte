<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.875 3.556a9.75 9.75 0 1 1-14.62 8.76L2.25 12l.005-.316a9.75 9.75 0 0 1 14.62-8.128m-1.26 4.83a.975.975 0 0 0-1.38 0l-5.85 5.85-.08.091a.975.975 0 0 0 1.46 1.287l5.85-5.85.08-.091a.975.975 0 0 0-.08-1.287\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
