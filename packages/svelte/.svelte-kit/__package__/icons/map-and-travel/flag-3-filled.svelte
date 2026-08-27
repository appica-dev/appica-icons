<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.78 4c.825 0 1.256.959.758 1.578l-.074.082-3.673 3.687 3.673 3.688c.584.585.213 1.569-.574 1.654l-.11.005H6.186v5.834a.974.974 0 0 1-.855.965l-.113.007a.967.967 0 0 1-.962-.858l-.007-.114V4.972a.974.974 0 0 1 .855-.965L5.22 4z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
