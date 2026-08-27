<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.173 20.485a3.999 3.999 0 1 0-5.657-5.657M14.829 3.515a4 4 0 0 0 5.657 5.657m-5.657 5.656a3.999 3.999 0 1 0-5.556-5.753 3.999 3.999 0 0 0 5.556 5.753\"/>";
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
