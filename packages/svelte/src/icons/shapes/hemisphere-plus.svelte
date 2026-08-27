<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 9c0 .394.233.784.685 1.148s1.115.695 1.951.973c.836.279 1.828.5 2.92.65A25 25 0 0 0 12 12c1.182 0 2.352-.078 3.444-.228s2.084-.372 2.92-.65c.836-.28 1.499-.61 1.95-.974C20.768 9.784 21 9.394 21 9M3 9c0-.394.233-.784.685-1.148s1.115-.695 1.951-.973c.836-.279 1.828-.5 2.92-.65A25 25 0 0 1 12 6c1.182 0 2.352.078 3.444.228s2.084.372 2.92.65c.836.28 1.499.61 1.95.974.453.364.686.754.686 1.148M3 9a9 9 0 0 0 9 9m9-9a9 9 0 0 1-.604 3.248M16 19h6m-3-3v6\"/>";
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
