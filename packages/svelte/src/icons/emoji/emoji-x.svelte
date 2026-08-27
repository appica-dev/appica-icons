<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.983 12.556a9 9 0 1 0-8.433 8.427M9 10h.01M15 10h.01M9.5 15c.658.64 1.56 1 2.5 1q.291 0 .574-.045M21.5 21.5l-5-5m0 5 5-5\"/>";
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
