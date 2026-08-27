<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3M4 6c0-1.657 3.582-3 8-3s8 1.343 8 3M4 6v6m16-6v6M4 12c0 1.657 3.582 3 8 3 .856 0 1.68-.05 2.454-.144M4 12v6c0 1.657 3.582 3 8 3q.256 0 .51-.006M19 22v-6m0 0 3 3m-3-3-3 3\"/>";
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
