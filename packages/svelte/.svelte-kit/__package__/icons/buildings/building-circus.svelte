<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 11q-.5 8-2 10h4c1 0 4-4 4-9m0 0v-1m0 1c0 5 3 9 4 9h4q-1.5-2-2-10m-6-4V3l2 1h-2m-8 7h16c-3 0-8-3.5-8-4.5 0 1-5 4.5-8 4.5\"/>";
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
