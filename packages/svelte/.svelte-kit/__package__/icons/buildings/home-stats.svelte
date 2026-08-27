<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 13v-1h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h2.5M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-2 7 3-3 2 2 4-4m0 0h-3m3 0v3\"/>";
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
