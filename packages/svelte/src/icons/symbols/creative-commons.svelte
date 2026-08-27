<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.927 1.927 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116m6-3a2.187 2.187 0 0 0-2.914.116 1.93 1.93 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
