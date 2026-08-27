<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.55 3.5v7.083M21.5 3.5h-.95-17.1-.95m18.05 7.083H3.45m17.1 0v2.361c0 2.226 0 3.339-.783 4.031s-2.042.691-4.561.691H8.794c-2.519 0-3.779 0-4.561-.691s-.783-1.805-.783-4.031v-2.361m0 0V3.5m2.375 14.167V20.5m12.35-2.833V20.5M10.1 13.417l.148.073c.399.198.599.298.814.348s.439.05.885.05h.106c.447 0 .67 0 .885-.05s.415-.15.814-.348l.148-.073m-3.8-6.611l.148.073c.399.199.599.298.814.348s.439.051.885.051h.106c.447 0 .67 0 .885-.051s.415-.15.814-.348l.148-.073\"/>";
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
