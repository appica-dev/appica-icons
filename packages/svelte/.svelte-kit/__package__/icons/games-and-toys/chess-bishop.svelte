<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 0v1m0 0q-5 1.5-5 7c0 1.331.833 3 2.5 3h5.175c1.55-.119 2.325-1.716 2.325-3 0-3.573-1.667-6-5-7m3 2-3 3m-4 5-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16z\"/>";
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
