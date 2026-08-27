<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.004 21.216a2 2 0 0 1-2.417-.316l-4.244-4.243A8 8 0 1 1 17.657 5.343 7.93 7.93 0 0 1 20 11m-2 7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-3 0h3m-3 0v-1.5a1.5 1.5 0 1 1 3 0V18M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
