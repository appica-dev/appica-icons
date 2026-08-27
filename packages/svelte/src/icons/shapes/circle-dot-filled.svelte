<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.875 3.556a9.75 9.75 0 1 1-14.62 8.76L2.25 12l.005-.316a9.75 9.75 0 0 1 14.62-8.128M12 10.05a1.95 1.95 0 0 0-1.928 1.654l-.017.15-.005.146.005.146A1.95 1.95 0 1 0 12 10.05\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
