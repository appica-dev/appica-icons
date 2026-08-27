<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 6.722v4.222m0 0c.53 0 1.04.223 1.414.619.375.396.586.933.586 1.493v6.333c0 .56-.21 1.097-.586 1.493A1.95 1.95 0 0 1 12 21.5c-.53 0-1.04-.222-1.414-.618A2.17 2.17 0 0 1 10 19.389v-6.333c0-.56.21-1.097.586-1.493A1.95 1.95 0 0 1 12 10.944M7 2.5h10v4.222H7z\"/>";
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
