<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 7h3m-3 4h2m4.8-3.5 2.982 3.28a3 3 0 0 0 4.238.202L20.3 8m-11.28.801-.6 6A2 2 0 0 0 10.41 17h7.98a2 2 0 0 0 1.99-1.801l.6-6A2 2 0 0 0 18.99 7h-7.98a2 2 0 0 0-1.99 1.801\"/>";
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
