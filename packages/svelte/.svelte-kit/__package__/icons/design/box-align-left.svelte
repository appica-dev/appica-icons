<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.002 20.003h-.01m5.011 0h-.011m.011-5.001h-.011m.011-6h-.011m.011-5h-.011m-4.99 0h-.01m-4.99 16.001v-16h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z\"/>";
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
