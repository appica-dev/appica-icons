<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 4v17M4 4v3a3 3 0 0 0 6 0V4m7 8c-.796 0-1.559-.421-2.121-1.172S14 9.061 14 8s.316-2.078.879-2.828S16.204 4 17 4s1.559.421 2.121 1.172S20 6.939 20 8s-.316 2.078-.879 2.828S17.796 12 17 12m0 0v9\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
