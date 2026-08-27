<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-2.9 8.034M19 18v.01m2.122 2.111a3 3 0 1 0-4.242 0q.627.628 2.12 1.879 1.579-1.335 2.122-1.879\"/>";
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
